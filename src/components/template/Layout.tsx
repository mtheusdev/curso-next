import MenuLateral from './MenuLateral';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';
interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: any;
}

const Layout = (props: LayoutProps) => {
  return (
      <div className={`
        flex h-screen w-screen
        
      `}>
        <MenuLateral/>
        <div className={"flex w-full p-7 flex-col bg-gray-300 dark:bg-gray-800"}>
          <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/> 
          <Conteudo>
            {props.children}
          </Conteudo>
        </div>
      </div>
  );
};

export default Layout;
