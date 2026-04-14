import type { OrderStatusType } from '../../types/orderStatusType/orderStatusType';
import css from './SearchOrderForm.module.css';
// type Order = 'asc' | 'desc';
interface Props {
  value: OrderStatusType;
  orderStatus: (value: OrderStatusType) => void;
}

export const SearchOrderForm = ({ orderStatus, value }: Props) => {
  const selectChangeHandler = (
    selectedValue: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    value = selectedValue.target.value as OrderStatusType;
    orderStatus(value);
  };
  return (
    <select
      className={css.selectContainer}
      id="dropdownMenu"
      value={value}
      onChange={selectChangeHandler}
    >
      <option defaultValue="asc">asc</option>
      <option value="desc">desc</option>
    </select>
  );
};
