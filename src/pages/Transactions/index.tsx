import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>Desenvolvimento</td>
            <td>13/04/2024</td>
          </tr>

          <tr>
            <td width="50%">Pizza</td>
            <td>
              <PriceHighlight variant="outcome">- R$ 80,00</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2024</td>
          </tr>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
