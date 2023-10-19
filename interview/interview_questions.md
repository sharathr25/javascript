## Design

- Discussion on micro-frontends
- How do you keep concerns segregated in AngularJS
- What are the things you take into account while choosing a framework for a new requirement
- You have a list of 500000 items which you have to process recursively, how will you achieve this without running into stack overflow?
- A question around 100000 elements in a DOM (say chat messages), how would you render them without jamming the flow? (wanted to check on Intersection observer)
- Design whatsapp implementation
- Implement a generic analytics tracking library like Google analytics. (Open ended question)
- Design a flowchart library, where different components like conditionals, expression, etc can be used to build a flow

## Web related reads

- [Cache control headers](https://gertjans.home.xs4all.nl/javascript/cache-control.html)
- Difference in re-paint and re-reflow
- [Design patterns in javascript](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
- [Source Mapping](https://www.mattzeunert.com/2016/02/14/how-do-source-maps-work.html)

## CSS/HTML

- How do you align a single line text vertically in the middle of its container
- Have you performed CSS optimisations to reduce reflow and repaint in your application? Discuss in details
- Semantic Tags

## Security

- XSS attacks, what type of XSS attacks you would commonly look out for? What is the prevention you put in place?
- CORs and how browser handles CORs
- CSRF and prevention
- Are you aware of SRI (Sub resource integrity)
- CSP and whitelisting
- Are you aware of obfuscation in javascript?
- Referrer policy and risks?
- set-cookie header directives: httpOnly, lax, secure etc and their purpose

## Build and Pipelines

- How many different bundlers have you used so far?
- What output modes have you used

## JS Code

- Difference between commonJs, RequireJS and ES6 style of module linking
- Implement classic inheritance between X and Y function
- Design a basic compose function
- Write a function sum which can be used like this: sum(10, 20)(10)(10)(30, 10, 10)() and will return total sum i.e. 100 when invoked without any parameter
- Implement Promise.all and Promise.race
- Implement a batch api call which will batch successive calls over time and send one api call to fetch in bulk and resolve each service call with value when response comes
- Implement an async queue
- Implement mine sweeper game

- Define variable hoisting
- How to detect and avoid cyclic dependencies in javascript
- implement pubsub
- Implement promise
- Do you know MutationObserver Api? How will you use this api?
- Using microtasks in JavaScript with queueMicrotask
- Create a custom fetch api which will limit the active xhr requests at any time to X (number). Rest should be processed later

```
How will you add into the code to print 'i' in serial order? You cannot move out console.log out of setTimeout

for(let i=0; i < 10; i++){
    let time = Math.floor(Math.random() \* 100);
    setTimeout(() => console.log(i), time);
}
```

```
button.addEventLister(""click"", () => {
    Promise.resolve().then(() => { console.log(""M task 1"") });
    console.log(""task 1"")
});

button.addEventLister(""click"", () => {
    Promise.resolve().then(() => { console.log(""M task 2"") });
    console.log(""task 2"")
});

button.click();
```

```
const nextClick = new Promise(resolve => {
link.addEventLister('click', resolve, {once: true})
});

nextClick.then(event => {
event.preventDefault()
})

link.click()
```

## React JS

- How does react work
- What are state and props in react
- What are hooks and why it is needed despite we have class component where we have all lifecylcle method
- How can we acces DOM node or react element in react (Refs)
- what is prop drilling? is it good? if not then how to overcome this?
- Error boundries
- Reconciliation
- Typechecking with proptypes
- what is controlled and uncontrolled components?
- Hooks
