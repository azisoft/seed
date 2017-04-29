import { Task } from './task';
import Config from '../config';

export abstract class CssTask extends Task {

  shallRun(files: String[]) {
    return Config.ENABLE_SCSS || Config.ENABLE_LESS || files.some(f =>
      f.endsWith('.css') || f.endsWith('.sass') || f.endsWith('.scss') || f.endsWith('.less'));
  }

}
