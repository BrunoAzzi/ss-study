package br.org.sesisc.smart.safety.helpers;

import org.springframework.util.StringUtils;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

public class ClassHelper {

    public static class Pair<L,R> {

        private final L left;
        private final R right;

        public Pair(L left, R right) {
            this.left = left;
            this.right = right;
        }

        public L getLeft() { return left; }
        public R getRight() { return right; }

        @Override
        public int hashCode() { return left.hashCode() ^ right.hashCode(); }

        @Override
        public boolean equals(Object o) {
            if (!(o instanceof Pair)) return false;
            Pair pairo = (Pair) o;
            return this.left.equals(pairo.getLeft()) &&
                    this.right.equals(pairo.getRight());
        }

    }

    public static Pair<List<String>, List<Object>> merge(Object destiny, Object origin) {
        if (!destiny.getClass().isAssignableFrom(origin.getClass())) {
            return null;
        }

        List<String> listNames = new ArrayList<String>();
        List<Object> listValues = new ArrayList<Object>();
        Method[] methods = destiny.getClass().getMethods();

        for (Method fromMethod : methods) {
            if (fromMethod.getDeclaringClass().equals(destiny.getClass())
                    && fromMethod.getName().startsWith("get")) {
                final String fromName = fromMethod.getName();
                final String toName = fromName.replace("get", "set");
                final String propertyName = StringUtils.capitalize(fromName.replace("get",""));

                try {
                    if(fromMethod.getReturnType() instanceof Class && ((Class<?>)fromMethod.getReturnType()).isEnum()) {
                        fromMethod = destiny.getClass().getMethod(fromName+"Value");
                    }

                    Method toMethod = destiny.getClass().getMethod(toName, fromMethod.getReturnType());
                    Object oldValue = fromMethod.invoke(destiny, (Object[])null);
                    Object newValue = fromMethod.invoke(origin, (Object[])null);
                    if(newValue != null && newValue != oldValue) {
                        listNames.add(propertyName.substring(0,1).toLowerCase() + propertyName.substring(1));
                        listValues.add(newValue);
                        toMethod.invoke(destiny, newValue);
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }

        if (listNames.size() > 0) {
            return new Pair(listNames, listValues);
        }

        return null;
    }
}
