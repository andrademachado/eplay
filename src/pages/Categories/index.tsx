import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () =>{
  const { data: actionGames, isLoading: isLoadingAction } =useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } = useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } = useGetSimulationGamesQuery()
  const { data: sportGames, isLoading: isLoadingSports } = useGetSportGamesQuery()


    return (
      <>
        <ProductsList games={actionGames} title="Ação" background="black" id="action" isLoading={isLoadingAction}  />
        <ProductsList games={sportGames} title="Esportes" background="gray" id="sports" isLoading={isLoadingFight} />
        <ProductsList games={fightGames} title="Luta" background="black" id="fight" isLoading={isLoadingRPG}/>
        <ProductsList games={rpgGames} title="RPG" background="gray" id="rpg" isLoading={isLoadingSimulation} />
        <ProductsList games={simulationGames} title="Simulação" background="black" id="simulation" isLoading={isLoadingSports} />
      </>
    )
  }

export default Categories
