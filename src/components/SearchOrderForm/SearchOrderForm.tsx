import css from './SearchOrderForm.module.css';
type Order = 'asc' | 'desc';
interface Props {
  value: Order;
  orderStatus: (value: Order) => void;
}

export const SearOrderForm = ({ orderStatus, value }: Props) => {
  const selectChangeHandler = (
    selectedValue: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    value = selectedValue.target.value as Order;
    orderStatus(value);
  };
  return (
    <select
      className={css.selectContainer}
      id="dropdownMenu"
      value={value}
      onChange={selectChangeHandler}
    >
      <option value="asc">asc</option>
      <option value="desc">desc</option>
    </select>
  );
};
