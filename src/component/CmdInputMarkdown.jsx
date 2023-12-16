const inputArray = ['D','H','K','P','S','0','1','2','3','4','5','6','7','8,','9']

export default function CmdInputMarkdown({input}) {
    const comands = input.split('>')
    let result = input.split("").map((char) => { 
        return inputArray.includes(char) ? (
        <img src={"input_icons/" + char + ".png"} style={{display:'inline'}}/>
      ) : ( char);
    });

    return (
        <p> 
            {result}
        </p>
    );
}