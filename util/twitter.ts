import Twit from 'twit'

const twitterClient = new Twit({
    consumer_key: '75sz9B9YquyPfRhjzapTwZV4w', // Twitter API Key
    consumer_secret: 'BEsdB8zxoYrvGfPOxjxlT69z19akQWOtWN5O5eB9wmLiDN1mRi', // Twitter API Secret
    access_token: '3732317835-bEzsYAmtr0D8GyHPHY3DfuHLwNlDTZoGFXnzzvv', // Twitter Access Token
    access_token_secret: 'yIOud004vpuvfF9SJmxcyI4aPFubACUPuWiVnRk8CiFut', // Twitter Access Token Secret
  });
  
  const getTweets = async (username, count = 5) => {
    try {
      const { data } = await twitterClient.get('statuses/user_timeline', {
        screen_name: username,
        count, // Çekilecek tweet sayısı
        tweet_mode: 'extended', // Uzun tweet’leri çekmek için
      });
      console.log(data)
      return data.map((tweet:any) => ({
        id: tweet.id_str,
        text: tweet.full_text,
        created_at: tweet.created_at,
      }));
    } catch (error) {
      console.error('Tweetleri çekerken hata oluştu:', error);
      return [];
    }
  };
  
  export default getTweets;