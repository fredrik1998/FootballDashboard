import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSerieATopscorers } from '../../../slice/SerieATopScorersSlice'
import { StyledTable, StyledWrapper, StyledLink } from './TopscorersElements'
import Loader from '../../Loader/Loader'

const Topscorers = () => {
    const dispatch = useDispatch()
    const SerieATopScorer = useSelector((state) => state.SerieATopScorer.data)
    const SerieATopScorerStatus  = useSelector((state) => state.SerieATopScorer.status)
    const SerieATopScorerError = useSelector((state) => state.SerieATopScorer.error)
    const SerieA = useSelector((state) => state.SerieA.data)

    useEffect(() => {
        if(SerieATopScorerStatus === 'idle'){
            dispatch(fetchSerieATopscorers())
        }
    }, [dispatch, SerieATopScorerStatus])


    const getTeamId = (teamName) => {
        for(const team of SerieA){
            if(team.team.name === teamName){
                return team.team.id
            }
        }
        return ''
    }

    const getTeamLogo = (teamName) => {
        for(const team of SerieA){
            if(team.team.name === teamName){
                return team.team.crest
            }
        }
        return ''
    }


  return (
    <>
    {SerieATopScorerStatus === 'loading' ? (
        <Loader/>
    ) : (
        <StyledWrapper>
            <StyledTable>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Goals</th>
                    </tr>
                </thead>
                <tbody>
                    {SerieATopScorer.map((player) => {
                        return(
                            <tr key={player.id}>
                                <td>{player.name}</td>
                                <td><img src={getTeamLogo(player.team)} width={30} height={30}></img><StyledLink to={`/team/${getTeamId(player.team)}`}>{player.team}</StyledLink></td>
                                <td>{player.goals}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </StyledTable>
        </StyledWrapper>
    )}
    </>
  )
}

export default Topscorers