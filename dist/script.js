const colors = [
"#96ADFC",
"cyan",
"#A8F29A",
"#D8D3D6",
"#EDDD6E",
"#EDD1B0",
"#B987DC",
"#E0A6AA",
"#A5F7E1",
"mediumorchid"];


class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      quote: '' };

  }

  fetchQuote() {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

    let options = {
      method: "GET",
      headers: {
        Accept: "application/json" } };



    fetch(url, options).
    then(response => {
      return response.json();
    }).
    then(jsonData => {
      this.displayNewQuote(jsonData.quotes);
    }).
    catch(error => {
      console.log(error);
    });
  }

  displayNewQuote(quotes) {
    const textEl = document.getElementById("text");
    const quoteBoxEl = document.getElementById("quote-box");
    const authorEl = document.getElementById("author");
    const newQuoteBtnEl = document.getElementById("new-quote");
    const rootEl = document.querySelector(":root");


    let randomIndex = Math.round(Math.random() * 100);
    let { author, quote } = quotes[randomIndex];

    this.setState({
      author: author,
      quote: quote });


    let randomColorIndex = Math.round(Math.random() * 9);
    let newColor = colors[randomColorIndex];
    rootEl.style.setProperty("--theme", newColor);
  }

  componentDidMount() {
    this.fetchQuote();
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("blockquote", { class: "blockquote" }, /*#__PURE__*/
      React.createElement("p", null, /*#__PURE__*/
      React.createElement("i", { id: "quote-icon", class: "fas fa-quote-left mr-2" }), /*#__PURE__*/
      React.createElement("span", { id: "text" }, this.state.quote)), /*#__PURE__*/

      React.createElement("footer", { id: "author", class: "blockquote-footer mt-4" }, this.state.author)), /*#__PURE__*/

      React.createElement("div", { class: "mt-4 d-flex flex-row justify-content-between" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: "twitter.com/intent/tweet", target: "_blank" }, /*#__PURE__*/
      React.createElement("i", { id: "twitterIcon", class: "fab fa-twitter" })), /*#__PURE__*/

      React.createElement("i", { id: "instaIcon", class: "fab fa-instagram" })), /*#__PURE__*/

      React.createElement("button", { class: "btn", id: "new-quote", onClick: () => this.fetchQuote() }, "New Quote"))));





  }}


function MyName() {
  return /*#__PURE__*/React.createElement("p", { id: "myName" }, "by Sushanth");
}

function MainContainer() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "main-container" }, /*#__PURE__*/
    React.createElement(QuoteBox, null), /*#__PURE__*/
    React.createElement(MyName, null)));


}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(MainContainer, null)));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));