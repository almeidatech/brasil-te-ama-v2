/**
 * FormField molecule — label + input/textarea + helper/error
 * @component
 */
import { Text } from '../atoms';

export function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  error,
  helper,
  required,
  className = '',
  ...inputProps
}) {
  const isTextarea = type === 'textarea';
  const InputTag = isTextarea ? 'textarea' : 'input';

  return (
    <div className={`mb-6 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-base font-body font-semibold text-text mb-2"
        >
          {label}
          {required && <span className="text-error"> *</span>}
        </label>
      )}
      <InputTag
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 text-base font-body border rounded-sm transition-colors ${
          error
            ? 'border-error focus:border-error focus:bg-red-50'
            : 'border-sand focus:border-ink focus:bg-cream'
        }`}
        {...inputProps}
      />
      {error && <Text size="meta" tone="default" className="text-error mt-1 block" />}
      {helper && !error && (
        <Text size="micro" tone="muted" className="mt-1 block" />
      )}
    </div>
  );
}
