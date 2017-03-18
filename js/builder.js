/*
var Excel = React.createClass({
  render: function(){
    return(
      React.DOM.ul(null,
        this.props.headers.map(function(detail){
           return React.DOM.li(null, detail);
        })
      )
    );// end of return
  }
});
ReactDOM.render(
  React.createElement(Excel,{
    initialData: detail,
    headers: headers,
  }),
  document.getElementById("details")
);
*/

var Description = React.createClass({
  render:function(){
    return React.DOM.span(null, "Plato (left) and Aristotle (right), a detail of The School of Athens, a fresco by Raphael. Aristotle gestures to the earth, representing his belief in knowledge through empirical observation and experience, while holding a copy of his Nicomachean Ethics in his hand. Plato gestures to the heavens, representing his belief in The Forms, while holding a copy of Timaeus.");
  }
})
ReactDOM.render(
  React.createElement(Description),
  document.getElementById("smallDescription")
);

ReactDOM.render(
  React.DOM.h1(null,"Aristotle"),
  document.getElementById("title")
);



var detail = [
  "Born in 384 BC in Stagira, Chalcidice",
  "At about the age of eighteen, Aristotle moved to Athens to continue his education at Plato's Academy.",
  "Accompanied Xenocrates to the court of his friend Hermias of Atarneus in Asia Minor.",
  "Was invited by Philip II of Macedon to become the tutor to his son Alexander in 343 BC.",
  "By 335 BC, Artistotle had returned to Athens, establishing his own school there known as the Lyceum. Aristotle conducted courses at the school for the next twelve years.",
  "This period in Athens, between 335 and 323 BC, is when Aristotle is believed to have composed many of his works. He wrote many dialogues of which only fragments have survived."
];