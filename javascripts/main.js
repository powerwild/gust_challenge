import kjs           from './k';
import drawers       from './widgets/drawers';
import extendingForm from './widgets/extending-form';
import tabs          from './widgets/tabs';
import dependentCheckboxes from './widgets/dependent-checkboxes';

document.addEventListener("DOMContentLoaded", () => {
  kjs({ drawers, extendingForm, tabs, dependentCheckboxes }, document);
});
