<?php include("components/header.php"); ?>
    <div class="container">
        <div class="top-bar">
            <h1 class="title">Academia</h1>
            <span>
                <span><?php echo $_SESSION['user']; ?></span>
                <span class="box"><img src="assets/prof.jpg" alt="" srcset=""></span>
            </span>
        </div>
        <div class="floating-menu">
            <div class="logo">
                <div class="box"></div>
            </div>
            <?php include("components/f-menu.php"); ?>
        </div>
        <main>
            <div class="objects">
                <ul>
                    <?php 
                        require_once "libs/account.php";
                        $accounts = new Account($dbh);
                        $accounts = $accounts->fetchAllAccounts();
                        if (isset($accounts) && sizeof($accounts) > 0){ 
                            foreach ($accounts as $account) { ?>
                                <li><?=$account->fullname?></li>
                    <?php }} ?>
                </ul>
                <p><?php //echo $_SESSION['user']; ?></p>
                <p><?php //echo $_SESSION['role']; ?></p>
                <p><?php //echo $_SESSION['fullname']; ?></p>
                <p><?php //echo $_SESSION['address']; ?></p>
                <p><?php //echo $_SESSION['contact']; ?></p>
                <p><?php //echo $_SESSION['session_id']; ?></p>
                <p><?php //echo $_SESSION['semister_id']; ?></p>
            </div>
        </main>
        <div class="side-bar">
            <div class="top-sidebar">
                <div class="title">News Feed :</div>
            </div>
            <?php include("components/newsfeed.php");?>
        </div>
    </div>
<?php include("components/footer.php"); ?>