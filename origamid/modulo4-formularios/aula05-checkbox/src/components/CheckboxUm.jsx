import { useState } from 'react';

export const CheckboxUm = () => {
  const [termos, setTermos] = useState(false);

  return (
    <>
      <h2>Um item</h2>
      <form>
        {termos && <p>Aceitou os termos.</p>}
        <label>
          <input
            type="checkbox"
            value="Termos"
            checked={termos}
            onChange={({ target }) => setTermos(target.checked)}
          />
          Aceitou os termos.
        </label>
      </form>
    </>
  );
};
