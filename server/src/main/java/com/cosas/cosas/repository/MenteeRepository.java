package com.cosas.cosas.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import com.cosas.cosas.model.Mentee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class MenteeRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Mentee> findByMentor(String email) {
        String query = "SELECT * FROM final_matching WHERE mentor = ?";
        System.out.println(email);
        
        return jdbcTemplate.query(query, 
            new RowMapper<Mentee>() {
                public Mentee mapRow(ResultSet rs, int rowNum) throws SQLException {
                    Mentee m = new Mentee();
                    m.setEmail(rs.getString("e_mail"));
                    m.setSpecialization(rs.getString("specialization"));
                    m.setRanking1(rs.getString("ranking_1"));
                    m.setRanking2(rs.getString("ranking_2"));
                    m.setRanking3(rs.getString("ranking_3"));
                    m.setFirstName(rs.getString("preferred_name"));
                    m.setYear(rs.getString("year"));
                    return m;
                }
            }, 
            new Object[]{email});
    }

    public Integer count() {
        return jdbcTemplate.queryForObject("SELECT COUNT(*) FROM final_matching", Integer.class);
    }
}
