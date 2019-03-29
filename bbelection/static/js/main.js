document.addEventListener("DOMContentLoaded", function() {
  let apiUrl = 'https://bb-election-api.herokuapp.com/';
  axios.get(apiUrl)
    .then((response) => {
      let candidates = response.data.candidates.map(function(candidate) {
        return {
          name: candidate.name,
          votes: candidate.votes
        };
      });
      // make a handle to append the list items on to
      let ul = document.createElement('ul');
      document.body.appendChild(ul);
      candidates.forEach(function(candidate){
        let li = document.createElement("li");
        li.innerText = `Name: ${candidate.name}, Votes: ${candidate.votes}`;
        ul.appendChild(li);
      });
    });
});
