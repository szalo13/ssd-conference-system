import { Component, Input } from '@angular/core';
var A2tFormFieldComponent = (function () {
    function A2tFormFieldComponent() {
    }
    A2tFormFieldComponent.prototype.ngOnInit = function () {
        this._control = this.form.controls[this.question.key];
    };
    Object.defineProperty(A2tFormFieldComponent.prototype, "isValid", {
        get: function () {
            return this._control.valid;
        },
        enumerable: true,
        configurable: true
    });
    return A2tFormFieldComponent;
}());
export { A2tFormFieldComponent };
A2tFormFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'a2t-form-field',
                template: "\n        <div class=\"a2t-input-group\"\n            [formGroup]=\"form\">\n\n            <label\n                [attr.for]=\"question.key\"\n                [style.color]=\"labelColor\"\n                *ngIf=\"_control.pristine\">\n                {{question.label}}\n            </label>\n\n            <label class=\"a2t-error\"\n                [attr.for]=\"question.key\"\n                *ngIf=\"_control.hasError('required') && !_control.pristine\">\n                {{question.label}} is required\n            </label>\n\n            <label class=\"a2t-error\"\n                [attr.for]=\"question.key\"\n                *ngIf=\"_control.hasError('minlength')\">\n                {{question.label}} is too short\n            </label>\n\n            <label class=\"a2t-error\"\n                [attr.for]=\"question.key\"\n                *ngIf=\"_control.hasError('maxlength')\">\n                {{question.label}} is too long\n            </label>\n\n            <label class=\"a2t-valid\"\n                [attr.for]=\"question.key\"\n                *ngIf=\"_control.valid && !_control.pristine\">\n                {{question.label}}\n            </label>\n\n            <input\n                [formControlName]=\"question.key\"\n                [id]=\"question.key\"\n                [type]=\"question.type\">\n        </div>\n    ",
                styles: ["\n        .a2t-input-group {\n            padding-bottom: 40px;\n            padding-right: 20px;\n            padding-left: 20px;\n            font-family: \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif;\n        }\n\n        .a2t-input-group input {\n            width: 100%;\n            outline: none;\n            border: none;\n            background-color: #eee;\n            line-height: 40px;\n\n            padding-left: 10px;\n            padding-right: 10px;\n        }\n\n        .a2t-input-group label {\n            color: #666;\n            font-weight: 600;\n            font-size: 13px;\n            margin-bottom: 0;\n        }\n\n        .a2t-error {\n            color: #df6564 !important;\n        }\n\n        .a2t-valid {\n            color: #72c380 !important;\n        }\n    "]
            },] },
];
/** @nocollapse */
A2tFormFieldComponent.ctorParameters = function () { return []; };
A2tFormFieldComponent.propDecorators = {
    'question': [{ type: Input },],
    'form': [{ type: Input },],
};
//# sourceMappingURL=a2t-form-field.component.js.map