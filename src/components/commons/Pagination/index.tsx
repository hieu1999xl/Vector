import styled from 'styled-components';

export interface PaginationProps {
  page: number;
  handleChangePage: (page: number) => void;
}

const Pagination = ({ page, handleChangePage }: PaginationProps) => {
  const changePage = (type: string) => {
    let pageNumber = page;
    if (type === 'PREV') {
      pageNumber = pageNumber - 1;
    } else {
      pageNumber = pageNumber + 1;
    }
    handleChangePage(pageNumber);
  };

  return (
    <SCPagination>
      <button disabled={page === 0} onClick={() => changePage('PREV')}>
        Previous
      </button>
      <button onClick={() => changePage('NEXT')}>Next</button>
    </SCPagination>
  );
};

export default Pagination;

const SCPagination = styled.div`
  display: flex;
  margin: 20px;
  justify-content: flex-end;
`;
