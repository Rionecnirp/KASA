import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"
import Collapse from "../Components/Collapse/Collapse"

describe('Collapse Component', () => {
  const title = 'Titre test'
  const text = 'Contenu visible après ouverture'

  /** On teste un composant avec state.
   * 1er test : On s'assure que le titre est bien présent dans le document, la classe "Out" du second div n'est pas présente (donc que la classe)
   * 2ème test : On vérifie si les classes "Out" & "Up" sont bien mises en place et retirées quand on clique sur le bouton.
   */

  test("rend le titre et le contenu (fermé par défaut : pas de classe Out)", () => {
    render(<Collapse title={title} text={text} />)
    expect(screen.getByText(title)).toBeInTheDocument()

    const content = screen.getByText(text)
    expect(content).toBeInTheDocument()

    expect(content).not.toHaveClass('Out')

    const arrow = screen.getByRole('button')
    expect(arrow).toBeInTheDocument()
    expect(arrow).not.toHaveClass('Up')
  })

  test("au clic la flèche ajoute les classes d'ouverture, et au clic suivant les retire", () => {
    render(<Collapse title={title} text={text} />);
    const arrow = screen.getByRole('button');
    const content = screen.getByText(text);

    fireEvent.click(arrow)
    expect(arrow).toHaveClass('Up')
    expect(content).toHaveClass('Out')

    fireEvent.click(arrow)
    expect(arrow).not.toHaveClass('Up')
    expect(content).not.toHaveClass('Out')
  })
})