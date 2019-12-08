function GoToEdit()
{
    let TypeContent = document.getElementById("edit-save");
    let ChangeHeader = document.getElementById("PostTitle") ;
    let ChangeContent = document.getElementById("PostBody") ;

    if(TypeContent.textContent.includes('Edit'))
    {
        TypeContent.innerHTML = 'Save &#x1f4be;' ;
        ChangeHeader.setAttribute('contenteditable' , "true") ;
        ChangeContent.setAttribute('contenteditable' , 'true') ;
        ChangeHeader.style.border = '1px black solid' ;
        ChangeContent.style.border = '1px black solid' ;
    }
    else if(TypeContent.textContent.includes('Save'))
    {
        TypeContent.innerHTML = 'Edit &#x270D;'
        ChangeHeader.setAttribute('contenteditable' , "false") ;
        ChangeContent.setAttribute('contenteditable' , 'false') ;
        ChangeHeader.style.border = '';
        ChangeContent.style.border = '' ;
    }
}

var numberOfClicks=0;
function GoToLikes()
{   numberOfClicks += 1;
    document.getElementById("likezone").innerHTML = "<span>&#128077; Liked!</span>";
    let ContentChange = document.getElementById('likeinc') ;
   if(numberOfClicks === 1)
   {
       ContentChange.innerHTML =  numberOfClicks + " person likes this";
   }
   else
   {
    ContentChange.innerHTML = numberOfClicks + " people have like this !" ;
   }
}


function AddComment()
{
    document.getElementById("commentArea").style.display="block";
    var text =document.getElementById("text-area").value;
    var OldvL = document.getElementById("commentArea").innerHTML;
    text += OldvL;
    document.getElementById("commentArea").innerHTML = "";

    document.getElementById("commentArea").innerHTML="<p style='background-color:white; margin:10px; padding-top:11px;height:35px;'>"+text+"</p>";

    document.getElementById("text-area").value = "";
}