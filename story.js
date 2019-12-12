// innerHTML REPLACES the old HTML in the element
var advance = new Audio("sound-effects/advance.mp3");
var advance2 = new Audio("sound-effects/advance2.mp3");
var jumppipe = new Audio("sound-effects/jump-pipe.mp3");
var gameover = new Audio("sound-effects/game-over.mp3");
var gameover2 = new Audio("sound-effects/game-over2.mp3");
var ohno = new Audio("sound-effects/oh-no.mp3");
var moneysuccess = new Audio("sound-effects/money-success.mp3");
var nicefood = new Audio("sound-effects/nice-food.mp3");
var rain = new Audio("sound-effects/rain.mp3");
var defeat = new Audio("sound-effects/defeat.mp3");
var end = new Audio("sound-effects/end.mp3");
//Start & event 1
document.querySelector(".start").addEventListener("click", function() {
    advance.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>You fail the final exam. Now you just do not want to go home because you will definitely be shouted by your parents. What do you decide to do next?</p><img src="https://media.giphy.com/media/l0MYABdW15OyrEjv2/giphy.gif"></img>';
    // 2. Erase old button
    document.querySelector(".start").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".shop-btn").classList.remove("invisible");
    document.querySelector(".swim-btn").classList.remove("invisible");
});
//Event 1-1
document.querySelector(".swim-btn").addEventListener("click", function(){
    advance.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>You get on the island, but you are starving now. What do you decide to do next?</p><img src="https://media0.giphy.com/media/l378aUIDVRapQXXfG/source.gif"></img>';
    // 2. Erase old button
    document.querySelector(".shop-btn").classList.add("invisible");
    document.querySelector(".swim-btn").classList.add("invisible");
    //3. Show next button
    document.querySelector(".fruit-btn").classList.remove("invisible");
    document.querySelector(".fish-btn").classList.remove("invisible");
});
//Event 1-2
document.querySelector(".fruit-btn").addEventListener("click", function(){
    ohno.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>The fruit is supposed to give to Snow White, but you eat the poisonus fruit!</p><img src="https://1.bp.blogspot.com/-96A-s9qtLpE/VtjxE37oX0I/AAAAAAAABSE/p2x3dfUbsnI/s1600/Poison-Bite.gif"></img>';
    // 2. Erase old button
    document.querySelector(".fruit-btn").classList.add("invisible");
    document.querySelector(".fish-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".gameover-btn").classList.remove("invisible");
});
//Event 1-3
document.querySelector(".fish-btn").addEventListener("click", function(){
    ohno.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>You eat the fish! But its brother-in-law is a shark. You are eaten by the angry shark.</p><img src="https://1.bp.blogspot.com/-oGO3WtG10lc/XB2-dzn_KvI/AAAAAAAtUU0/_PmyaNGozj8USm9DdnxGQRfuG9mbJDiSwCLcBGAs/s1600/AW2776357_00.gif"></img>';
    // 2. Erase old button
    document.querySelector(".fruit-btn").classList.add("invisible");
    document.querySelector(".fish-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".gameover-btn").classList.remove("invisible");
});
//Event 2
document.querySelector(".shop-btn").addEventListener("click", function(){
    advance.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>You meet your best friend in middle school! You decides to eat dinner with her. What do you want to eat?</p><img src="https://media0.giphy.com/media/5t235Nf4wo3rhLSMVy/giphy.gif"></img>';
    // 2. Erase old button
    document.querySelector(".shop-btn").classList.add("invisible");
    document.querySelector(".swim-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".noodle-btn").classList.remove("invisible");
    document.querySelector(".sushi-btn").classList.remove("invisible");
});
var name;
//Event 2-1
document.querySelector(".noodle-btn").addEventListener("click", function(){
    name = prompt("Who is your best friend in middle school?");
    nicefood.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>The noodle is delicious! You tell ' + name + ' that you will pay the bill this time.</p><img src="https://i.pinimg.com/originals/bc/2f/10/bc2f10b896d0da1b8b8177693b920b1d.gif"></img>'
    // 2. Erase old button
    document.querySelector(".noodle-btn").classList.add("invisible");
    document.querySelector(".sushi-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".nextnoodle-btn").classList.remove("invisible");
});
//Event 2-2
document.querySelector(".sushi-btn").addEventListener("click", function(){
    name = prompt("Who is your best friend in middle school?");
    nicefood.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>The sushi is delicious! You tell '+ name + ' that you will pay the bill this time.</p><img src="https://i.pinimg.com/originals/f6/b7/71/f6b771f91543444f416402b53f8ef21d.gif"></img>';
    // 2. Erase old button
    document.querySelector(".noodle-btn").classList.add("invisible");
    document.querySelector(".sushi-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".nextsushi-btn").classList.remove("invisible");
});
//Event 3-1
document.querySelector(".nextnoodle-btn").addEventListener("click", function(){
    money = prompt("How much money do you have in your pocket?");
    // 2. Erase old button
    document.querySelector(".noodle-btn").classList.add("invisible");
    document.querySelector(".sushi-btn").classList.add("invisible");
    // 3. Show next button
    if (money >= 120){
      console.log("yes money");
      moneysuccess.play();
      document.querySelector(".story-window").innerHTML = '<p>The noodle costs NT$120. You successfully pay the bill!</p><img src="https://media3.giphy.com/media/FlWgXEtj5aM5G/giphy.gif"></img>';
      document.querySelector(".nextsuccess-btn").classList.remove("invisible");
      document.querySelector(".nextnoodle-btn").classList.add("invisible");
    } else {
      console.log("no money");
      gameover.play();
      document.querySelector(".story-window").innerHTML = '<p>The noodle costs NT$120. You do not have enough money! You are forced to wash dishes in the restaurant forever.</p><img src="https://media3.giphy.com/media/50wdXgH0hm3jW/giphy.gif"></img>';
      document.querySelector(".nextnoodle-btn").classList.add("invisible");
      document.querySelector(".gameover-btn").classList.remove("invisible");
    }
});
//Event 3-2
document.querySelector(".nextsushi-btn").addEventListener("click", function(){
    money = prompt("How much money do you have in your pocket?");
    // 2. Erase old button
    document.querySelector(".noodle-btn").classList.add("invisible");
    document.querySelector(".sushi-btn").classList.add("invisible");
    // 3. Show next button
    if (money >= 90){
      // moneysuccess.play("money-success.mp3");
      console.log("yes money");
      moneysuccess.play();
      document.querySelector(".story-window").innerHTML = '<p>The sushi costs NT$90. You successfully pay the bill!</p><img src="https://media3.giphy.com/media/FlWgXEtj5aM5G/giphy.gif"></img>';
      document.querySelector(".nextsuccess-btn").classList.remove("invisible");
      document.querySelector(".nextsushi-btn").classList.add("invisible");
    } else {
      console.log("no money");
      gameover.play();
      document.querySelector(".story-window").innerHTML = '<p>The noodle costs NT$90. You do not have enough money! You are forced to wash dishes in the restaurant forever.</p><img src="https://media3.giphy.com/media/50wdXgH0hm3jW/giphy.gif"></img>';
      document.querySelector(".nextsushi-btn").classList.add("invisible");
      document.querySelector(".gameover-btn").classList.remove("invisible");
    }
});
//Event 4
document.querySelector(".nextsuccess-btn").addEventListener("click", function(){
    rain.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>Oh no! It is rainy now. What do you decide to do next?</p><img src="https://media2.giphy.com/media/10VopBr9hbrJEA/source.gif"></img>';
    // 2. Erase old button
    document.querySelector(".nextsuccess-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".mall-btn").classList.remove("invisible");
    document.querySelector(".stay-btn").classList.remove("invisible");
});
//Event 5-1
document.querySelector(".stay-btn").addEventListener("click", function(){
    advance.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>' + name + ' asks you to see the latest movie with her after a while.</p><img src="https://media1.tenor.com/images/df25a76346b680dd30017028c4e56986/tenor.gif?itemid=3518066"></img>';
    // 2. Erase old button
    document.querySelector(".mall-btn").classList.add("invisible");
    document.querySelector(".stay-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".nextmovie-btn").classList.remove("invisible");
});
//Event 5-2
document.querySelector(".nextmovie-btn").addEventListener("click", function(){
    advance.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>You finish the movie with ' + name + '. Do you think you enjoy the movie?</p><img src="https://media1.giphy.com/media/3o7rc0qU6m5hneMsuc/giphy.gif"></img>';
    // 2. Erase old button
    document.querySelector(".nextmovie-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".yes-btn").classList.remove("invisible");
    document.querySelector(".no-btn").classList.remove("invisible");
});
//Event 5-3
document.querySelector(".yes-btn").addEventListener("click", function(){
    gameover.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>But ' + name + ' thinks the movie is the worst one ever. You try to argue with her, but she is angry and leaves.</p><img src="https://media1.tenor.com/images/1e4285716f5c58fef0c0092e1c441fc7/tenor.gif?itemid=12506954"></img>';
    // 2. Erase old button
    document.querySelector(".yes-btn").classList.add("invisible");
    document.querySelector(".no-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".gameover-btn").classList.remove("invisible");
});
//Event 5-4
document.querySelector(".no-btn").addEventListener("click", function(){
    gameover.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>But ' + name + ' thinks the movie is the best one ever. You try to argue with her, but she is angry and leaves.</p><img src="https://media1.tenor.com/images/1e4285716f5c58fef0c0092e1c441fc7/tenor.gif?itemid=12506954"></img>';
    // 2. Erase old button
    document.querySelector(".yes-btn").classList.add("invisible");
    document.querySelector(".no-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".gameover-btn").classList.remove("invisible");
});
//Event 6
document.querySelector(".mall-btn").addEventListener("click", function(){
    advance2.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>You decide to play video game with ' + name + ' in the mall.</p><img src="https://media1.giphy.com/media/VAPi4i886MYhi/source.gif"></img>';
    // 2. Erase old button
    document.querySelector(".mall-btn").classList.add("invisible");
    document.querySelector(".stay-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".nextgame-btn").classList.remove("invisible");
});
//Event 7
document.querySelector(".nextgame-btn").addEventListener("click", function(){
    alert("Warning!! Something has happened!")
    advance2.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>You accidentally turn into Mario, and ' + name + ' turns into Luigi. What do you decide to do next?</p><img src="https://i.pinimg.com/originals/cc/e0/23/cce02339d610066101614f15480a792d.gif"></img>';
    // 2. Erase old button
    document.querySelector(".nextgame-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".jump-btn").classList.remove("invisible");
    document.querySelector(".continue-btn").classList.remove("invisible");
});
//Event 7-1
document.querySelector(".jump-btn").addEventListener("click", function(){
    jumppipe.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>You jump into the pipe and return to the real world.</p><img src="https://thumbs.gfycat.com/FreeThoughtfulAmericancrayfish-size_restricted.gif"></img>';
    // 2. Erase old button
    document.querySelector(".jump-btn").classList.add("invisible");
    document.querySelector(".continue-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".nextworld-btn").classList.remove("invisible");
});
//Event 7-2
document.querySelector(".nextworld-btn").addEventListener("click", function(){
    gameover2.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>You are frightened and decide to go home. You are shouted by your parents because of your low grades.</p><img src="https://media2.giphy.com/media/xT1R9Mm4c96XhwNvPi/giphy.gif"></img>';
    // 2. Erase old button
    document.querySelector(".nextworld-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".gameover-btn").classList.remove("invisible");
});
//Event 8
document.querySelector(".continue-btn").addEventListener("click", function(){
    advance2.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>You work with ' + name + ' and finally get to the castle.</p><img src="https://i.pinimg.com/originals/a5/5c/20/a55c2095383926772effb542eb1c1451.gif"></img>';
    // 2. Erase old button
    document.querySelector(".jump-btn").classList.add("invisible");
    document.querySelector(".continue-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".nextcastle-btn").classList.remove("invisible");
});
//Event 9
document.querySelector(".nextcastle-btn").addEventListener("click", function(){
    defeat.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>You defeat King Bowser Koopa. Do you want to help the prince get out the castle?</p><img src="https://thumbs.gfycat.com/BelatedFrayedChick-size_restricted.gif"></img>';
    // 2. Erase old button
    document.querySelector(".nextcastle-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".yes2-btn").classList.remove("invisible");
    document.querySelector(".no2-btn").classList.remove("invisible");
});
//Event 9-1
document.querySelector(".no2-btn").addEventListener("click", function(){
    gameover2.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>' + name + ' saves the prince and brings him back her home. The prince and ' + name + ' live happily ever after.</p><img src="https://media0.giphy.com/media/ZEgBHVeRlmTqjCPlqx/giphy.gif"></img>';
    // 2. Erase old button
    document.querySelector(".no2-btn").classList.add("invisible");
    document.querySelector(".yes2-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".gameover-btn").classList.remove("invisible");
});
//Event 10
document.querySelector(".yes2-btn").addEventListener("click", function(){
    end.play();
    // 1. Story text
    document.querySelector(".story-window").innerHTML = '<p>You save the prince and bring him back your home. The prince and you live happily ever after.</p><img src="https://media.giphy.com/media/nDSlfqf0gn5g4/giphy.gif"></img>';
    // 2. Erase old button
    document.querySelector(".yes2-btn").classList.add("invisible");
    document.querySelector(".no2-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".end").classList.remove("invisible");
});
document.querySelector(".gameover-btn").addEventListener("click", function(){
    //1. Show Title Screan text
    document.querySelector(".story-window").innerHTML = '<img src="https://media1.tenor.com/images/74a9bbb93503e9f4d7abb6921ed15814/tenor.gif?itemid=10975783"></img>';
    //2. Show old button
    document.querySelector(".gameover-btn").classList.add("invisible");
    //3. Erase start button
    document.querySelector(".start").classList.remove("invisible");
});
document.querySelector(".end").addEventListener("click", function(){
    //1. Show Title Screan text
    document.querySelector(".story-window").innerHTML = '<img src="https://media1.tenor.com/images/74a9bbb93503e9f4d7abb6921ed15814/tenor.gif?itemid=10975783"></img>';
    //2. Show old button
    document.querySelector(".end").classList.add("invisible");
    //3. Erase start button
    document.querySelector(".start").classList.remove("invisible");
});
