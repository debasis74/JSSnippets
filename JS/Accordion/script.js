const faqs = [
    {
      question: "What is JavaScript?",
      answer: "JavaScript is a versatile programming language commonly used for creating interactive web pages.",
    },
    {
      question: "What is the DOM?",
      answer: "The DOM (Document Object Model) represents the structure of a web page and allows scripting languages like JavaScript to interact with it.",
    },
    {
      question: "What is an event listener?",
      answer: "An event listener is a function that waits for a specific event (like a click) to occur on an element and then executes a callback function.",
    },
    {
      question: "How do I include JavaScript in an HTML file?",
      answer: "You can include JavaScript in an HTML file using a <script> tag, either inline or linked as an external file.",
    },
  ];

const accordionParent = document.getElementById('accordion');

const addChildDivs = (element) => {

    const accordionHeader = document.createElement('div');
    accordionHeader.id='accordion-header';

    const accordionTitle = document.createElement('div');
    accordionTitle.textContent = element.question;

    const accordionData =  document.createElement('div');
    accordionData.className = 'accordion-data';
    accordionData.textContent = element.answer;

    const accordionChildOpenStatus = document.createElement('div');
    accordionChildOpenStatus.textContent = '+';

    accordionData.style.display = 'none';

    accordionHeader.addEventListener("click", ()=>{
        const isOpen = accordionData.style.display === 'block';
        accordionData.style.display = isOpen ? 'none' : 'block';
        accordionChildOpenStatus.textContent = isOpen ? '+' : '-';
    });

    accordionHeader.appendChild(accordionTitle);
    accordionHeader.appendChild(accordionChildOpenStatus);

    return {
        header: accordionHeader,
        data: accordionData,
    }
};

faqs.forEach((element,index)=>{

   const { header , data} = addChildDivs(element); 

    accordionParent.appendChild(header);
    accordionParent.appendChild(data);
});