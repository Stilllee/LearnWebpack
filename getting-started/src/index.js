import _ from "lodash";

function component() {
  var element = document.createElement("div");

  /* 다음 줄이 작동하려면 lodash가 필요합니다. */
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
