<?php include("components/header.php"); ?>
    <div class="container">
        <div class="top-bar">
            <h1 class="title">Academia | itGeeks </h1>
        </div>
        <div class="minimal-menu">
            <div class="logo">
                <div class="box">
                    <img src="assets/logo.png" alt="CSE">
                </div>
            </div>
            <?php include("components/f-menu.php"); ?>
        </div>
        <div class="menu-bar">
        <?php include("components/menu.php"); ?>
        </div>
        <main>
            <div class="objects">
                <div class="card">
                    <a href="#">
                        <div class="card-placeholder">
                            <img src="assets/plus.png" alt="Orange" />
                        </div>
                    </a>
                </div>
                <?php 
                    require_once "libs/subject.php";
                    $subject = new Subject($dbh);
                    if (isset($_GET['id'])) {
                        $id = $_GET['id'];
                        $subjects = $subject->fetchSubjectsBySemister($id);
                        if (isset($subjects) && sizeof($subjects) > 0){
                            foreach ($subjects as $subject) { ?>
                            <div class="card">
                                <a href="#">
                                    <div class="card-image">
                                        <img src="assets/orange.jpg" alt="Orange" />
                                    </div>
                                    <div class="card-body">
                                        <div class="card-title">
                                            <h3><?=$subject->name?></h3>
                                        </div>
                                        <div class="card-excerpt">
                                            <p><?=$subject->name?></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        <?php }
                        }
                    }
                ?>
            </div>
        </main>
        <div class="side-bar">
            <div class="top-sidebar">
                <div class="title">Subjects and Contents :</div>
            </div>
            <?php include("components/ranking.php"); ?>
        </div>
    </div>
<?php include("components/footer.php");?>