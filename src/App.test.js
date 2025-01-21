import App from './App'
import { act, render, screen } from '@testing-library/react';

describe("App", () => {
    it('Title should be Thikkiiana City Theater', async () => {
        await act(async () => {
            render(<App />);
        });

        screen.debug();
        const titleElement = screen.getByText('Thikkiiana City Theater')
       /expect(titleElement).toBeInTheDocument();
    });
})