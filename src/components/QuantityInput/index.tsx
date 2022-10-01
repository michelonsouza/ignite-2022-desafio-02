import { forwardRef, useCallback } from 'react';

import { Plus, Minus } from 'phosphor-react';

import { QuantityInputContainer } from './styles';
import { QuantityInputProps } from './types';

const QuantityInput = forwardRef<HTMLInputElement, QuantityInputProps>(
  ({ onChangeQuantity, value, ...props }, ref): JSX.Element => {
    const handleSubQuantity = useCallback(() => {
      onChangeQuantity(Number(value) - 1);
    }, [value, onChangeQuantity]);

    const handleAddQuantity = useCallback(() => {
      onChangeQuantity(Number(value) + 1);
    }, [value, onChangeQuantity]);

    return (
      <QuantityInputContainer>
        <input
          name="quantity"
          type="number"
          readOnly
          value={value}
          {...props}
          ref={ref}
        />
        <button
          type="button"
          disabled={value === 1}
          onClick={handleSubQuantity}
        >
          <Minus size={16} />
        </button>
        <button type="button" onClick={handleAddQuantity}>
          <Plus size={16} />
        </button>
      </QuantityInputContainer>
    );
  },
);

QuantityInput.displayName = 'QuantityInput';

export { QuantityInput };
