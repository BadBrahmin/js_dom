Use the below instruction and solve it using `index.html` file. Write JavaScript in the `script` tag.

1. Select the element with an id of `demo` and apply style `1px solid purple` on that.

document.getElementById("demo").style.border = `1px solid purple`;

2. Select all the elements by class name of `demo` and apply the style `1px solid orange` to each element.

document.getElementsByClassName(`demo`).style.border = `1px solid orange`;

3. Select all the elements by tag name of `article` and apply this style `1px solid blue`.

var demoClass = document.getElementsByClassName(`demo`);
for ( let i = 0; i < demoClass.length ; i++){
demoClass[i].style.border = `1px solid blue`;
}

4. Select the element by id of `demo-query` using querySelector and apply style of `1px solid grey`.

document.querySelector(`#demo-query`).style.border = `1px solid grey`;

5. Select the element by class of `demo-query-all` using querySelectorAll and apply style of `1px solid green`.

var demoQueryAllClass = document.querySelectorAll(`.demo-query-all`);

for ( let i = 0; i < demoQueryAllClass.length ; i++){
demoQueryAllClass[i].style.border = `1px solid green`;
}


