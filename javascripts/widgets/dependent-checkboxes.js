function dependentCheckboxes(widget) {
    const mainBox = widget.querySelector('[name=books]');
    const subBoxes = widget.querySelectorAll('[name=book]');
    function handleMainBox() {
        mainBox.indeterminate = false;
        subBoxes.forEach((box) => box.checked = mainBox.checked);
    }
    function handleSubBoxes(e) {
        e.stopPropagation();
        e.target.checked = !e.target.checked;
        let count = 0;
        subBoxes.forEach((box) => {
            if (box.checked) ++count;
        });
        if (count === subBoxes.length) {
            mainBox.checked = true;
            mainBox.indeterminate = false;
        } else if (count === 0) {
            mainBox.checked = false;
            mainBox.indeterminate = false;
        } else {
            mainBox.checked = false;
            mainBox.indeterminate = true;
        }
        if (!mainBox.indeterminate) handleMainBox();
    }
    const actions = [
        {
            element: mainBox,
            event: 'click',
            handler: handleMainBox
        }
    ];
    subBoxes.forEach((box) => {
        actions.push({
            element: box,
            event: 'click',
            handler: handleSubBoxes
        })
    });
    return {actions};
}
module.exports = dependentCheckboxes;
