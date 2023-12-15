function shakeMagic8Ball(){
    const question = prompt('Ask the Magic 8-Ball a question');
    if(question === null) {
        document.getElementById('response-text').innerText = 'Please Ask a Question'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '#BAD/BROKENIMAGE' //Fix later
        return
    }

    if(!question.trim()) {
        alert('Please enter a valid question!')
        return
    }

    const randomnumber = Math.floor(Math.random()*8);
    let answer, image, color; 

    switch (randomnumber){
        case 0:
            answer = "Yes"
            image = "yes-image.jpg" //change this!! 
            color = 'text-success'
            break; 
        case 1:
            answer = "No"
            image = "no-image.jpg" //change this!! 
            color = 'text-danger'
            reak; 
        case 2:
            answer = "Ask again later"
            image = "later-image.jpg" //change this!! 
            color = 'text-secondary'
            break; 
        case 3:
            answer = "Maybe"
            image = "maybe-image.jpg" //change this!! 
            color = 'text-secondary'
            break; 
        case 4:
            answer = "Cannot predict now"
            image = "cannot-predict-image.jpg" //change this!! 
            color = 'text-muted'
            break;
        case 5:
            answer = "Don't count on it"
            image = "dont-count-on-it-image.jpg" //change this!! 
            color = 'text-danger'
            break; 
        case 6:
            answer = "Ummm..."
            image = "ummm-image.jpg" //change this!! 
            color = 'text-muted'
            break; 
        case 7:
            answer = "In your dreams"
            image = "In-your-dreams-image.jpg" //change this!! 
            color = 'text-danger'
            break; 
    }

const responseText = document.getElementById('response-text');
responseText.innerText = answer; 
responseText.classList = `display-4 ${color}`; 
document.getElementById('response-image').src = image; 











}