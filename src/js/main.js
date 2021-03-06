$(document).ready(()=>{
    // menu toggle
    $(".logo").click(()=> {
        $(".minimal-menu").toggleClass("floating-menu");
        // $(".menu-bar").slideToggle();
    });

    // Activation panel
    $(".activator").click(function(){
        let dataID = $(this).attr('data-id');
        let msg = $(this).parent();
        let row = $(this).closest('.trow');
        $.ajax({
            url: "activationpanel.php",
            method: "POST",
            data: "id=" + dataID,
            success: function () {
                $(msg).text('Approved !');
                $(row).fadeOut();
            }
        });
    });
    // Activation panel
    $(".tactivator").click(function(){
        let dataID = $(this).attr('data-id');
        let msg = $(this).parent();
        let row = $(this).closest('.trow');
        $.ajax({
            url: "activateteachers.php",
            method: "POST",
            data: "id=" + dataID,
            success: function () {
                $(msg).text('Approved !');
                $(row).fadeOut();
            }
        });
    });

    // Student promotion form
    $('#insert_form').on('submit', function (event) {
        event.preventDefault();
        $.ajax({
            url: "students_overview.php",
            method: "POST",
            data: $('#insert_form').serialize(),
            success: function (response) {
                $('#insert_form')[0].reset();
                $('.actions').html(`
                    <h3>Succeded !</h3> 
                    <a class="btn" href="students.php">Back</a>
                `);
            }
        });
    });
});




// Chart JS 
var datatable = {
    labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    datasets: [
        {
            fillColor: "rgba(255,255,255,0.1)",
            strokeColor: "rgba(0,0,0,0.25)",
            pointColor: "rgba(255,255,255,1)",
            pointStrokeColor: "#FF6B6B",
            data: [135, 185, 225, 385, 275, 215, 265]
        }
    ]
}

var options = {
    scaleFontColor: "rgba(0,0,0,1)",
    scaleLineColor: "rgba(0,0,0,0.1)",
    scaleGridLineColor: "rgba(0,0,0,0.1)",
    scaleShowLabels: false,
    scaleShowHorizontalLines: false,
    bezierCurve: false,
    pointDot: true,
    pointDotRadius: 5,
    pointDotStrokeWidth: 2,
    scaleOverride: true,
    scaleSteps: 6,
    scaleStepWidth: 100,
    responsive: true,
    showTooltips: true,
    tooltipTemplate: "<%= value %> ",
    tooltipFontSize: 16,
    tooltipYPadding: 12,
    tooltipXPadding: 12,
    tooltipCornerRadius: 3,
    tooltipFillColor: "#008080",

    onAnimationComplete: function () {
        var arrSelector = [];
        this.datasets[0].points.forEach(function (point) {
            if (point.label == 'WED') {
                arrSelector.push(point);
            }
        });

        this.showTooltip(arrSelector, true);
    },
    tooltipEvents: []
}
new Chart(stat.getContext("2d")).Line(datatable, options);






// Pop up functions for page retreivals
function addSemister() {
    let left = (screen.width / 2) - (600 / 2);
    let top = (screen.height / 2) - (800 / 2);
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=800,left=${left},top=${top}`;
    open('addsemister.php', 'Packages', params);
}

function addSubject() {
    let left = (screen.width / 2) - (600 / 2);
    let top = (screen.height / 2) - (800 / 2);
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=800,left=${left},top=${top}`;
    open('addsubject.php', 'Packages', params);
}
function addChapter(id) {
    let left = (screen.width / 2) - (600 / 2);
    let top = (screen.height / 2) - (800 / 2);
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=800,left=${left},top=${top}`;
    open('addchapter.php?id='+id, 'Packages', params);
}
function addTopic(subject, chapter) {
    let left = (screen.width / 2) - (600 / 2);
    let top = (screen.height / 2) - (800 / 2);
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=800,left=${left},top=${top}`;
    open('addtopic.php?subject='+subject+'&chapter='+chapter, 'Packages', params);
}

function addArticle(sub, chapter, author) {
    let left = (screen.width / 2) - (600 / 2);
    let top = (screen.height / 2) - (800 / 2);
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=800,left=${left},top=${top}`;
    open('addarticle.php?sub='+sub+'&chapter='+chapter+'&author='+author, 'Packages', params);
}
function askQuestion(id) {
    let left = (screen.width / 2) - (600 / 2);
    let top = (screen.height / 2) - (800 / 2);
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=800,left=${left},top=${top}`;
    open('askquestion.php?q_id='+id, 'Packages', params);
}
function answerNow(id) {
    let left = (screen.width / 2) - (600 / 2);
    let top = (screen.height / 2) - (800 / 2);
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=800,left=${left},top=${top}`;
    open('answernow.php?q_id='+id, 'Packages', params);
}
// Adding to notes
function add2Note(article, account) {
    if (article != null) {
        $.ajax({
            url: "add2note.php",
            method: "POST",
            data: "article_id="+article+"&account_id="+account,
            success: function (response) {
                $('.plus').text(response);
            }
        });
    }
    else {
        $('.plus').text("<h2> Sorry! </h2>");
    }
}

// Individual promotions for students
function promoteOne(semister, account) {
    var msgs = $(this).parent();
    var rows = $(this).closest('.trow');
    if (account != null) {
        $.ajax({
            url: "students_overview.php",
            method: "POST",
            data: "semister_id="+semister+"&account_id="+account,
            success: function (response) {
                $(rows).fadeOut();
            }
        });
    }
    else {
        $(msgs).text('Sorry !');
        $(rows).fadeOut();
    }
}

// Go backward
function goBack() {
    window.history.back();
}


// load articles by topic

function loadArticles(topic_id) {
    if (topic_id != null) {
        $.ajax({
            url: "loadarticles.php",
            method: "POST",
            data: "topic_id=" + topic_id,
            success: function (response) {
                $('.objects').html(response);

            }
        });
    }
    else {
        $('.objects').html("<h2> Sorry ! No Contents found ! </h2>");
    }
}
// load questions by chapter

function loadQuestions(chapter_id) {
    if (chapter_id != null) {
        $.ajax({
            url: "loadQuestions.php",
            method: "POST",
            data: "chapter_id=" + chapter_id,
            success: function (response) {
                $('.objects').html(response);

            }
        });
    }
    else {
        $('.objects').html("<h2> Sorry ! No Questions found ! </h2>");
    }
}
