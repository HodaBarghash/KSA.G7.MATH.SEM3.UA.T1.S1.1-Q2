function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6SePvsKC9EQ":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbx0N9MKrM1qVjwyPDLF0eXZ5joYAE5goM4CcFDJXvlESsR8WyUzvWd-BBmP5Q5MHlcZiA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

