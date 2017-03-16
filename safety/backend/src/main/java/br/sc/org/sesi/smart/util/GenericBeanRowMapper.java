package br.sc.org.sesi.smart.util;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeanWrapper;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.support.JdbcUtils;

import java.beans.PropertyDescriptor;
import java.beans.PropertyEditorSupport;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by Igor on 2/20/2016.
 */
public class GenericBeanRowMapper<T> extends BeanPropertyRowMapper<T> {

    public GenericBeanRowMapper() {
    }

    public GenericBeanRowMapper(Class<T> mappedClass) {
        super(mappedClass);
    }

    public GenericBeanRowMapper(Class<T> mappedClass, boolean checkFullyPopulated) {
        super(mappedClass, checkFullyPopulated);
    }

    @Override
    protected Object getColumnValue(ResultSet rs, int index, PropertyDescriptor pd) throws SQLException {
        if (pd != null && pd.getPropertyType().isEnum()) {
            String enumValue = (String) JdbcUtils.getResultSetValue(rs, index, String.class);
            if (StringUtils.isNotBlank(enumValue)) {
                Class<Enum> enumKlass = (Class<Enum>) pd.getPropertyType();
                return Enum.valueOf(enumKlass,enumValue);
            } else
                return null;
        } else
            return super.getColumnValue(rs, index, pd);
    }
}



