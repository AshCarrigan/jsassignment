this.oData = {};

function getData(){
  //make ajax request
  return [
    {
      blogID: 0,
      blurb: "blurb 1 sfdasf safs fdsaf asdf asdfa sdf asdf asdf asdfa sdfasd fasdf asdf asdf asdf asdfasdfadsfadsfasdf asdf asdf sdfasd fasd fasdf asdf sadf asdfa sf"
    },
    {
      blogID: 1, //Bug???// removed parenthesis
      blurb: "blurb 2 sfdasf safs fdsaf asdf asdfa sdf asdf asdf asdfa sdfasd fasdf asdf asdf asdf asdfasdfadsfadsfasdf asdf asdf sdfasd fasd fasdf asdf sadf asdfa sf"
    },
    {
      blogID: 2,
      blurb: "blurb 3 sfdasf safs fdsaf asdf asdfa sdf asdf asdf asdfa sdfasd fasdf asdf asdf asdf asdfasdfadsfadsfasdf asdf asdf sdfasd fasd fasdf asdf sadf asdfa sf"
    },
    {
      blogID: 3,
      blurb: "blurb 4 sfdasf safs fdsaf asdf asdfa sdf asdf asdf asdfa sdfasd fasdf asdf asdf asdf asdfasdfadsfadsfasdf asdf asdf sdfasd fasd fasdf asdf sadf asdfa sf"
    }
  ];
};

function injectDesc(){      //this is the function triggered by this.injectDesc trying to inject data to index.html//
  this.oData = getData();   //Bug??// oData was empty
  var sContainer = document.getElementById("read-more");  //container in html div named "read-more"//
  for(var i = 0; i < this.oData.length; i++) //Bug??// changed i to 0//
    {
      var newcontent = document.createElement('p');  //console.log(this.readMoreLessText(true, this.oData[i].blurb));
      newcontent.id = 'blog-' + this.oData[i].blogID;  //for newcontent.id (inside 'p'), insert blog and the blogID [i] from the loop (0, 1, 2, 3, 4)
      newcontent.innerHTML = this.readMoreLessText(true, this.oData[i].blogID);   //creates our content here inside HTML//  //this is writing new content on the html page (.innerHTML) to equal the function "this.readMoreLessText(true, this.oData[i].blogID)"//
      sContainer.appendChild(newcontent);   //this is what is telling read more to inject code into paragraph element; THIS IS THE ACTION APPENDCHILD//  //APPEND CHILD IS A METHOD//  //putting in new content (appendChild) into the .innerHTML from var sContainer under "read-more"//
    };
  //sContainer.innerHtml(newcontent);
};

function replaceBlurb(readMoreorLess, id){
  var blurb = this.oData[id].blurb; //bug??// id is position in array
  var lHalfDesc = (blurb.length/2); //bug??// referencing blurb.length/2
  var blogId = "blog-" + this.oData[id].blogID; //bug??  //referencing blogID
  var readMoreLink = readMoreorLess ? " ... <a href='javascript:void(0);'onclick='replaceBlurb(false," + id + ");'>Read More</a>" : " <a href='javascript:void(0);' onclick='replaceBlurb(true," + id + ");'>Read less</a>";
  var nLReadContent = readMoreorLess ? blurb.substring(0, lHalfDesc) : blurb;
  var pBlog = document.getElementById(blogId)
  pBlog.innerHTML = nLReadContent + readMoreLink;
};

function readMoreLessText(readMoreorLess, id) {
    var blurb = this.oData[id].blurb; //Bug changed getData() to oData[i], gets id and blurb//
    var nLReadContent = readMoreorLess ? blurb.substring(0, blurb.length/2) : blurb;   //IS READ MORE TRUE? YES BECAUSE TRUE IS PARAMETER, THAN SET SUBSTRING//
    return nLReadContent + " ... <a href='javascript:void(0);'onclick='replaceBlurb(false," + id + ");'>Read More</a>";
};

this.injectDesc();

//trying to inject into index.html


//ONCLICK IS BAD PRACTICE, USE TOGGLE?
//EVENT LISTENER IS BETTER THAN ON CLICK BECAUSE YOU CAN DEFINE A DIFFERENT EVENT, IT'S MORE FLEXIBLE
//set alert to make sure document is read by browser
//notes
