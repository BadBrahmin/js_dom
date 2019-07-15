Use the below instruction and solve it using `index.html` file. Write JavaScript in the `script` tag.

1. Use createElement() on the document object to create a new `p` element.

var element = document.createElement("p");

2. Use `textContent` property and set the text inside `p` to 'Hello Javascript!'.

element.textContent = "Hello Javascript";

document.body.appendChild(element);

3. Now use the `innerHTML` property to add HTML inside `p` add `I love <strong>Javascript</strong>`.

const content = element.innerHTML;

element.innerHTML = `I love <strong>Javascript</strong>`;

document.body.appendChild(element);

4. Create a structure like this using js and push it to the document.

```html
<ul>
  <li>Buy groceries</li>
  <li>Feed the cat</li>
  <li>Do laundry</li>
</ul>
```

var unlist = document.createElement ("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");

li1.innerText = "Buy groceries";
li2.innerText = "Feed the cats";
li3.innerText = "Do laundry";

unlist.appendChild(li1);
unlist.appendChild(li2);
unlist.appendChild(li3);

unlist

unlist.removeChild("li3");

5. Create a new `li` element and push it in the `ul` using `appendChild`.

var li4 = document.createElement("li");

li4.innerText = "something random";

unlist.appendChild(li4);

6. Using `removeChild()` or `remove()` remove an element from the ul.

unlist.removeChild(li3);
