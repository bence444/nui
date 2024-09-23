/* 3rd party packages */
import {
  ActiveDescendantKeyManager,
  FocusableOption,
  FocusOrigin
} from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  inject,
  input,
  isDevMode,
  OnChanges,
  OnDestroy,
  OnInit,
  output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import {
  Subject,
  takeUntil
} from 'rxjs';

/* local code */
import {
  ComponentColor,
  ComponentDisplay,
  ComponentSize,
  DEFAULT_COMPONENT_COLOR,
  DEFAULT_COMPONENT_DISPLAY,
  DEFAULT_COMPONENT_SIZE
} from '../_interfaces';

export interface CheckboxChanged {
  checked: boolean;
  disabled: boolean;
}

export type CheckboxLabelPosition = 'before' | 'after';

const styles = [];

if (isDevMode()) {
  styles.push('./checkbox.component.scss');
}

@Component({
  selector: 'nui-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrls: styles,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useValue: forwardRef(() => NuiCheckboxComponent)
    },
    ActiveDescendantKeyManager
  ],
  host: {
    'class': '_n_checkbox',
    '[class._n_checkbox-display-auto]': 'display() === "auto"',
    '[class._n_checkbox-display-block]': 'display() === "block"',
    '[class._n_checkbox-reverse]': 'labelPosition() === "before"',
    '(click)': 'clickToggle()'
  }
})
export class NuiCheckboxComponent implements
  OnInit,
  OnDestroy,
  OnChanges,
  ControlValueAccessor,
  FocusableOption,
  Validator
{

  /**
   * public inputs and their private observable
   */
  checked = input<boolean>(false);
  private _checked$ = toObservable(this.checked);

  display = input<ComponentDisplay>(DEFAULT_COMPONENT_DISPLAY);
  size = input<ComponentSize>(DEFAULT_COMPONENT_SIZE);
  color = input<ComponentColor>(DEFAULT_COMPONENT_COLOR);

  required = input<boolean>(false);

  // @ts-ignore
  override disabled = input<boolean>(false);

  labelPosition = input<CheckboxLabelPosition>('after');

  /**
   * outputs
   */
  changed = output<CheckboxChanged>();

  /**
   * dependency injects
   */
  private _cdRef = inject(ChangeDetectorRef);

  @ViewChild('checkbox')
  // @ts-expect-error
  private _nativeElement: ElementRef<HTMLElement>;

  private _keyManager = inject(ActiveDescendantKeyManager);

  /**
   * private variables and public getters
   */
  private _destroyed = new Subject<void>();

  private _value = this.checked();
  get value() {
    return this._value;
  }
  
  private _isDisabled?: boolean;
  get isDisabled() {
    return this._isDisabled ?? this.disabled();
  }

  /**
   * interface implementations
   */
  ngOnInit(): void {
    this._checked$.pipe(takeUntil(this._destroyed))
      .subscribe(value => this.writeValue(value));
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['required']) {
      this.validatorChangeFn();
    }
  }

  writeValue(obj: any): void {
    this._updateValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChangedFn = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }
  
  setDisabledState(isDisabled: boolean): void {
    if (this.isDisabled === isDisabled) {
      return;
    }

    this._isDisabled = isDisabled;
    this._cdRef.detectChanges();

    this._emitChanges();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.required() && control.value !== true) {
      return { 'required': true };
    }

    return null;
  }
  
  registerOnValidatorChange?(fn: () => void): void {
    this.validatorChangeFn = fn;
  }

  focus(origin?: FocusOrigin): void {
    this._nativeElement.nativeElement.focus();
  }

  /**
   * public functions
   */
  onChangedFn = () => {};
  onTouchedFn = () => {};
  validatorChangeFn = () => {};

  clickToggle() {
    if (this.isDisabled) {
      return;
    }

    this.onChangedFn();
    this._updateValue(!this.value);
  }

  /**
   * private functions
   */
  private _updateValue(obj: boolean, emit: boolean = true) {
    if (obj === this.value) {
      return;
    }

    this._value = obj;
    this._cdRef.detectChanges();

    if (emit) {
      this._emitChanges();
    }
  }

  private _emitChanges() {
    this.changed.emit({
      checked: this.value,
      disabled: this.isDisabled
    });
  }

  @HostListener('keydown', [ '$event' ])
  private _keyDown(event: KeyboardEvent) {
    if (this.isDisabled) {
      return;
    }

    if (event.key === ' ') {
      this.clickToggle();
    }
  }

}
