import { useEffect, useState } from "react"
import { styles } from "./style"
import { ModalWidthForm } from "../Modal"
import { ListedItems } from "../ItemsPage"

export const Home = () => {
  const [modal, setModal] = useState(false)
  const [nome, setNome] = useState("")
  const [quantidade, setQuantidade] = useState(0)
  const [homeState, setHomeState] = useState(true)
  const [items, setItems] = useState<{ name: string, quantidade: number }[]>([])
  const [addButtonStyle, setAddButtonStyle] = useState(styles.addMoreItemButton)
  const [clearButtonStyle, setClearButtonStyle] = useState(styles.addMoreItemButton)

  const changeStyleAddButton = () => {
    setAddButtonStyle(styles.hoverButton)
  }

  const resetStyleAddButton = () => {
    setAddButtonStyle(styles.addMoreItemButton)
  }

  const changeStyleClearButton = () => {
    setClearButtonStyle(styles.hoverButton)
  }

  const resetStyleClearButton = () => {
    setClearButtonStyle(styles.addMoreItemButton)
  }

  const showOrHidden = () => {
    setModal(!modal)
  }

  const onSubmit = (e: any) => {
    const newItems = [...items, { name: nome, quantidade: quantidade }]
    localStorage.setItem("items", JSON.stringify(newItems))
    setItems(newItems)
    setModal(false)
    setNome("")
    setQuantidade(0)
  }

  const cancelar = () => {
    setModal(false)
  }

  const seeList = () => {
    if(items.length > 0){
      setHomeState(false)
    } else {
      alert('Nenhum item foi inserido')
      setHomeState(true)
    }
  }

  const trash = (itemName: string) => {
    const updatedItems = items.filter((item: { name: string }) => item.name !== itemName)
    localStorage.setItem("items", JSON.stringify(updatedItems))
    setItems(updatedItems)
    if (updatedItems.length === 0) {
      setHomeState(true)
    }
  }

  const clearAll = () =>{
    while(items.length>0){
      items.pop()
    }
    localStorage.setItem('items', JSON.stringify(items))
    setItems(items.splice(0, items.length-1))
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    if (name === "nome") {
      setNome(value)
    } else if (name === "quantidade") {
      setQuantidade(Number(value))
    }
  }

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("items") || "[]")
    setItems(savedItems)
    if (savedItems.length > 0) {
      setHomeState(false)
    } else {
      setHomeState(true)
    }
  }, [])

  return (
    <>
      <div style={styles.backGround}>
        {homeState ? (
          <div style={styles.instrucionHome}>
            <h1 style={styles.title}>Lista de compras</h1>
            <h2 style={styles.subTitle}>
              Organize suas compras com facilidade e eficiência
            </h2>
            <div>
              <button style={styles.addItemButton} onClick={showOrHidden}>
                Adicionar Item
              </button>
              <button style={styles.viewListButton} onClick={seeList}>
                Visualizar Item
              </button>
            </div>
            <ModalWidthForm
              modal={modal}
              nome={nome}
              quantidade={quantidade}
              handleChange={handleChange}
              cancelar={cancelar}
              onSubmit={onSubmit}
            />
          </div>
        ) : (
          <>
            <div style={styles.list}>
              <ListedItems items={items} trash={trash} />
              <div style={styles.alignedButtons}>
                <button
                  style={addButtonStyle}
                  onClick={showOrHidden}
                  onMouseEnter={changeStyleAddButton}
                  onMouseOut={resetStyleAddButton}
                >
                  Adicionar um novo item
                </button>
                <button
                  style={clearButtonStyle}
                  onClick={clearAll}
                  onMouseEnter={changeStyleClearButton}
                  onMouseOut={resetStyleClearButton}
                >
                  Limpar lista
                </button>
              </div>
              <ModalWidthForm
                modal={modal}
                nome={nome}
                quantidade={quantidade}
                handleChange={handleChange}
                cancelar={cancelar}
                onSubmit={onSubmit}
              />
            </div>
          </>
        )}
      </div>
    </>
  )
}
