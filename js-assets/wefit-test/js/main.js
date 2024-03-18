const changeMenuLayout = () => {
  const menu = document.querySelector(".btn-group-vertical");
  menu.setAttribute("class", "btn-group-horizontal");
};

const reorderCard = () => {
  let cards = Array.from(document.querySelectorAll(".card"));
  const cardGroup = cards[0].parentElement.parentElement;

  const changeCardsPosition = () => {
    cardGroup.appendChild(cards[3].parentElement);
    cardGroup.appendChild(cards[0].parentElement);
    cardGroup.appendChild(cards[2].parentElement);
    cardGroup.appendChild(cards[1].parentElement);
    // Update cards list with new positions
    cards = Array.from(document.querySelectorAll(".card"));
  };

  const changeButtonColor = (index) => {
    const button = cards[index].querySelector(".btn");
    button.setAttribute("class", "btn btn-success");
  };

  changeCardsPosition();
  changeButtonColor(1);
};

const changeHeaderStyles = () => {
  const header = document.querySelector(".jumbotron");
  const headerButton = header.querySelector(".btn");
  const headerStyles = header.style;

  // Using style attibute
  headerStyles.backgroundColor = "#6B757E";
  headerStyles.color = "#fff";
  headerStyles.textAlign = "right";

  // Using set attribute to set element classes
  headerButton.setAttribute("class", "btn btn-success btn-lg");
};

const changeList = () => {
  const list = document.querySelector(".list-group");
  const newElements = ["Quarto item", "Quinto item"];

  const createElements = (newItems) => {
    newItems.forEach((item) => {
      const newListItem = document.createElement("li");
      newListItem.innerText = item;
      newListItem.setAttribute("class", "list-group-item");
      list.appendChild(newListItem);
    });
  };

  const changeItemActive = () => {
    const listItems = Array.from(document.querySelectorAll(".list-group-item"));
    listItems[0].setAttribute("class", "list-group-item");
    listItems[3].setAttribute("class", "list-group-item active");
  };

  createElements(newElements);
  changeItemActive();
};

changeMenuLayout();
reorderCard();
changeHeaderStyles();
changeList();
