/**
 * THIS NEEDS REAL COMMENTS
 *
 * Construct with the following hash:
 * {string} checkboxSelector, selector for the checkbox which dictates state of fields
 * {string} endDateSelector, selector for theme field to disable/enable
 * {string} endTimeSelector, selector for theme field to disable/enable
 * {string} endThemeSelector, selector for theme field to disable/enable
 *
 * @param {object} [opts] - An optional hash used for setup, as described above.
 */
const ProjectFilterer = function (opts) {
    let $linksContainer = $(opts.linksCntSelector);

    const init = function () {
        $(opts.filterLinksSelector).find("li a").each(function () {
            let $elem = $(this);
            $elem.click(function (e) {
                e.preventDefault();
                let tagFilter = $(this).data("filter");
                if (tagFilter == "all") {
                    $linksContainer.each(function () {
                        let $e = $(this);
                        $e.css("opacity", 0);
                        setTimeout(function(){ $e.show().css("opacity", 1); }, 400);
                    });
                } else {
                    $linksContainer.each(function () {
                        let projectTags = $($(this).find(".link-tags")[0]).text();
                        let $e = $(this);
                        if (projectTags.includes(tagFilter)) {
                            $e.css("opacity", 0);
                            setTimeout(function(){ $e.show().css("opacity", 1); }, 400);
                        } else {
                            $e.css("opacity", 0);
                            setTimeout(function(){ $e.hide(); }, 400);
                        }
                    });
                }
            });
        });
    };

    init();
};