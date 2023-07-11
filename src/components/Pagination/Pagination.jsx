const MAX_ITENS = 5;
const MAX_LEFT = (MAX_ITENS - 1) / 2;

const Pagination = ({ page, setPage, size, total, submited }) => {
  const totalPages = Math.ceil(total / size);
  const currentPage = page;
  const firstPage = Math.max(currentPage - MAX_LEFT, 1);

  return (
    <>
      {submited === true ? (
        <nav className="flex flex-row justify-center items-center">
          <button
            class="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
            onClick={() => setPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span>«</span>
            <span>Anterior</span>
          </button>
          {Array.from({ length: Math.min(MAX_ITENS, totalPages) })
            .map((_, index) => index + firstPage)
            .map((page) => (
              <nav
                key={page}
                className="list-none flex flex-row inline-flex items-center space-x-2"
              >
                <button
                  className={
                    page === currentPage
                      ? "w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full"
                      : "w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
                  }
                  onClick={() => setPage(page)}
                >
                  {page}
                </button>
              </nav>
            ))}

          <button
            class="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
            onClick={() => setPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span>Próxima</span>
            <span>»</span>
          </button>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};

export default Pagination;
