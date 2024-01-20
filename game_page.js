player1_name = localStorage.getItem("player1")
player2_name = localStorage.getItem("player2")

player1_score = 0
player2_score = 0

document.getElementById("player1_name").innerHTML = player1_name + " : "
document.getElementById("player2_name").innerHTML = player2_name + " : "

document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score

document.getElementById("player_question").innerHTML = "Question turn- " + player1_name
document.getElementById("player_answer").innerHTML = "Answer turn- " + player2_name

function send() {
    get_word = document.getElementById("word").value
    word = get_word.toLowerCase()
    console.log(word)

    charAt1 = word.charAt(1)
    console.log(charAt1)

    length_divide_2 = Math.floor(word.length / 2)
    charAt2 = word.charAt(length_divide_2)
    console.log(charAt2)

    length_minus_1 = word.length - 1
    charAt3 = word.charAt(length_minus_1)
    console.log(charAt3)

    remove1 = word.replace(charAt1, "_")
    console.log(remove1)
    remove2 = remove1.replace(charAt2, "_")
    console.log(remove2)
    remove3 = remove2.replace(charAt3, "_")
    console.log(remove3)

    question_word = '<h4 id="word_display">Question: ' + remove3 + '</h4>'
    input_box = '<br> answer <input type="text" id="input_box">'
    button = '<br><br> <button class="btn btn-info" onclick="check()">Check</button>'

    row = question_word + input_box + button
    document.getElementById("output").innerHTML = row

    document.getElementById("word").value = " "
}

question_turn = "player1"
answer_turn = "player2"

function check() {
    get_answer = document.getElementById("input_box").value
    answer = get_answer.toLowerCase()
    if (word == answer) {
        if (answer_turn == "player2") {
            player2_score = player2_score + 1
            document.getElementById("player2_score").innerHTML = player2_score
        } else {
            player1_score = player1_score + 1
            document.getElementById("player1_score").innerHTML = player1_score
        }


    }
}