// local reviews data
const reviews = [
  {
    id: 1,
    name: "Count Your Blessings",
    job: "Daily",
    img:"/images/1.png",
    text:
"First thing in the morning. When you wake up. Thank God for Life and know that you're Blessed. This is where you self define. Do the work and properly self define This is your truth. Everything else is a lie you chose to believe"
  },
  {
    id: 2,
    name: "Drink Water",
    job: "Daily",
    img:"/images/2.png",
     text:
"Getting enough water every day is important for your health. Drinking water can prevent dehydration, a condition that can cause unclear thinking, result in mood change, cause your body to overheat, and lead to constipation and kidney stones."  
    },
  {
    id: 3,
    name: "Exercise",
    job: "Daily",
    img:"/images/3.png",
    text:
"Exercise calms your body and your brain. After your body works hard, the levels of stress hormones -- like adrenaline and cortisol -- drop. Stress and anxiety fade away, especially after aerobic exercise."  },
  {
    id: 4,
    name: "Omega 3",
    job: "Daily",
    img:"/images/4.png",
    text:
"Omega-3 are essential compounds that are key building blocks for cell membranes, particularly in the brain. Omega-3 has anti-inflammatory properties and may lower cholesterol, blood pressure, depressive episodes, and the risk for heart disease."
  },
  {
    id: 5,
    name: "Vitamin B",
    job: "Daily",
    img:"/images/5.png",
    text:
"B-complex supplements pack 8 B vitamins into one pill. Bs are water-soluble, so your body won’t store them. Vegetarians risk a B12 deficiency without foods or supplements. A daily B- vitamin will help. B-complex supplements relieve stress, boost cognitive performance, and reduce symptoms of depression and anxiety." 
 },
  {
    id: 6,
    name: "Protein",
    job: "Daily",
    img:"/images/6.png",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {

    id: 7,
    name: "Vitamins C",
    job: "Daily",
    img:"/images/9.png",
    text:
"Vitamin C, also known as ascorbic acid, is necessary for the growth, development and repair of all body tissues. It's involved in many body functions, including formation of collagen, absorption of iron, the proper functioning of the immune system, wound healing, and the maintenance of cartilage, bones, and teeth"
  },
  {
    id: 7,
    name: "Vitamins D",
    job: "Daily",
    img:"/images/7.png",
    text:
    "Vitamin D is a nutrient your body needs for building and maintaining healthy bones. That's because your body can only absorb calcium, the primary component of bone, when vitamin D is present. Vitamin D also regulates many other cellular functions in your body. Its anti-inflammatory, antioxidant and neuroprotective properties support immune health, muscle function and brain cell activity"
  },
  {
    id: 8,
    name: "Socialise",
    job: "Daily",
    img:"/images/8.png",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },

  {
    id: 9,
   name:"Sleep",    
    job: "Daily",
    img:"/images/10.png",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


//select Items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn =  document.querySelector(".prev-btn")
const nextBtn =  document.querySelector(".next-btn")
const randomBtn =  document.querySelector(".random-btn")

//set starting item 
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded",function () {
  showPerson(currentItem);
});

//show person based on item

function showPerson(person) {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;

}
// show next person

nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem> reviews.length -1) {
    currentItem = 0;
  }  
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if(currentItem<0){
    currentItem = reviews.length -1;
  }
  showPerson(currentItem);
})
//show random person
randomBtn.addEventListener("click", function () {
  console.log('Hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});