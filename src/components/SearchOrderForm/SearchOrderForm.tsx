import css from './SearchOrderForm.module.css';

interface Props {
  orderStatus: (value: string) => void;
}

export const SearOrderForm = ({ orderStatus }: Props) => {
  const selectChangeHandler = (
    selectedValue: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const value: string = selectedValue.target.value;
    orderStatus(value);
  };
  return (
    <select
      className={css.selectContainer}
      id="dropdownMenu"
      onChange={selectChangeHandler}
    >
      <option className="" value="asc">
        asc
      </option>
      <option className="" value="desc">
        desc
      </option>
    </select>
  );
};
