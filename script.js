// Query selector

const select = (selector, scope) => {
  return (scope || document).querySelector(selector);
};

// Input sanitazation

function sanitazInput(input) {
  let div = document.createElement("div");
  div.textContent = input;
  return div.innerHTML;
}

sanitazInput("<img src=x onerror=alert(2)>");

// Create an element with classname

function createElement(attr) {
  const el = document.createElement(attr.tag);
  if (attr.classname) el.classList.add(attr.classname || "");
  // Inputs sanitized
  if (attr.content) el.innerHTML = sanitazInput(attr.content) || "content";
  return el;
}

const doThis = () => {
  const body = select("body");

  let h1metaData = {
    tag: "h1",
    classname: "className",
    content: "Pure Javascript",
  };
  const h1 = createElement(h1metaData);
  body.append(h1);

  let divMetaData = {
    tag: "p",
    content: "<img src=x onerror=alert(2)>",
  };
  const div = createElement(divMetaData);
  body.append(div);

  console.log(body);
};

addEventListener("DOMContentLoaded", doThis);
