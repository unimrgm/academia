<?php include("components/header.php"); ?>
    <div class="container">
        <div class="top-bar">
            <h1 class="title">Academia | itGeeks </h1>
        </div>
        <div class="minimal-menu">
            <div class="logo">
                <div class="box"></div>
            </div>
            <?php include("components/f-menu.php"); ?>
        </div>
        <div class="menu-bar">
            <?php include("components/menu.php"); ?>        
        </div>
        <main>
            <div class="objects">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </main>
        <div class="side-bar">
            <div class="top-sidebar">
                <div class="title">News Feed :</div>
            </div>
            <?php include("components/newsfeed.php"); ?>
        </div>
    </div>
<?php include("components/footer.php"); ?>