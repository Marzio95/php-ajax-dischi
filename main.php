<div class="container-fluid bkg_cont">
    <div class="container height">
        <div class="row gap-4 justify-content-center p-5">
            <?php
            foreach ($array_dischi as $disco) { ?>
                <div class="card col-4 col-md-3 col-lg-2 text-white card_back text-center">
                    <img class="img mt-4" src="<?= $disco['poster'] ?>" alt="<?= $disco['author'] ?>" />
                    <h4><?= $disco['title'] ?></h4>
                    <h5 class="text-secondary"><?= $disco['author'] ?></h5>
                    <h5 class="text-secondary"><?= $disco['year'] ?></h5>
                </div>
            <?php }
            ?>
        </div>
    </div>
</div>