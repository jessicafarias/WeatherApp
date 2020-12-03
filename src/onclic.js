import * as helper from './style_helpers';
import * as Update from './Update';


const Onclic = (jsonfile) => {
  helper.btn('btnF', () => {
    Update.celsius(jsonfile);
    helper.unstyle('btnC', 'selected');
    helper.style('btnC', 'toggle');
    helper.style('btnF', 'selected');
  });

  helper.btn('btnC', () => {
    Update.fahrenheit(jsonfile);
    helper.unstyle('btnF', 'selected');
    helper.style('btnF', 'toggle');
    helper.style('btnC', 'selected');
  });
};

export default Onclic;