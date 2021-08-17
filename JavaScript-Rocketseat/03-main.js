axios.get('http://api.github.com/users/diego3g')
    .then(function(response) {
        console.log(response);
        //console.log(response.data.avatar_url);
    })
    .catch(function(error) {
        console.warn(error);
    });
