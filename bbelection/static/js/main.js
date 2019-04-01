document.addEventListener("DOMContentLoaded", function() {
  let apiUrl = 'https://bb-election-api.herokuapp.com/';
  axios.get(apiUrl)
    .then((response) => {
      let ul = document.createElement('ul');
      document.body.appendChild(ul);
      response.data.candidates.forEach(function(candidate){
        let li = document.createElement("li");
        li.innerText = `Name: ${candidate.name}, Votes: ${candidate.votes}`;
        ul.appendChild(li);
        let form = document.createElement("form");
        let submit = document.createElement("button");
        submit.innerText = "Vote!";
        form.appendChild(submit);
        li.appendChild(form);
        form.method = "post";
        form.action = "https://bb-election-api.herokuapp.com/vote";
        let input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", "name");
        input.setAttribute("value", `${candidate.name}`);
        form.appendChild(input);
      });
      document.addEventListener("submit", function(event){
        event.preventDefault();
        let postName = event.target[1].value;
        axios.post("https://bb-election-api.herokuapp.com/vote", {"name":postName}).then((response)=> {
          console.log(response);
        });
      });
      let refresh = document.createElement("button");
      refresh.innerText = "Refresh";
      document.body.appendChild(refresh);
      refresh.addEventListener("click", function(event){
        document.location.reload();
      });
  });
});
