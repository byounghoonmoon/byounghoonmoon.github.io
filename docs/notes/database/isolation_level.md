# 격리수준(Isolation Level)
> 동시에 여러 트랜잭션이 처리될 때 특정 트랜잭션이 다른 트랜잭션에서 변경하거나 조회하는 데이터를 볼 수 있도록 허용할지 말지를 결정하는 것

## 1. 격리수준 
| 격리 수준            | Dirty Read | Non-Repeatable Read | Phantom Read                      | 특징                                    |
| ---------------- | ---------- | ------------------- | --------------------------------- | ------------------------------------- |
| Read Uncommitted | 가능         | 가능                  | 가능                                | 동시성 높고 성능 최고, 데이터 신뢰도 낮음              |
| Read Committed   | 불가         | 가능                  | 가능                                | 오라클 기본, 커밋된 데이터만 읽음                   |
| Repeatable Read  | 불가         | 불가                  | MySQL InnoDB: 불가 / PostgreSQL: 가능 | 같은 행의 반복 조회 값 보장, 범위 쿼리는 DB 구현에 따라 다름 |
| Serializable     | 불가         | 불가                  | 불가                                | 가장 강력, 동시성 낮음, 실무 거의 사용 안 함           |

## 2. Dirty Read
> 커밋되지 않은 데이터를 읽는 것

## 3. Non-Repeatable Read
> 한 트랜잭션 내에서 동일한 행(row)을 반복 조회했을 때, 다른 트랜잭션의 커밋으로 값이 바뀌어 결과가 달라지는 현상

## 4. Phantom Read
> 한 트랜잭션 내에서 범위 조회 결과가 늘어나거나 줄어드는 현상  
> 원인: 다른 트랜잭션에서 해당 범위에 데이터를 INSERT/DELETE/UPDATE 후 커밋함

## 요약
> 격리 수준은 총 4가지로 나뉘며, 트랜잭션 동시성 문제를 얼마나 방지하느냐에 따라 구분됩니다.  
첫 번째, Read Uncommitted는 모든 문제가 발생할 수 있는 가장 낮은 수준으로, 커밋되지 않은 데이터를 읽을 수 있어 Dirty Read, Non-Repeatable Read, Phantom Read가 모두 가능합니다. 성능은 가장 높습니다.  
두 번째, Read Committed는 Dirty Read를 방지하지만, Non-Repeatable Read와 Phantom Read는 여전히 발생할 수 있습니다. 오라클 기본 정책입니다.  
세 번째, Repeatable Read는 동일한 행의 반복 조회에서 값이 달라지지 않도록 보장하여 Non-Repeatable Read를 방지합니다. 범위 쿼리에서 발생하는 Phantom Read는 DB 구현에 따라 달라지며, MySQL InnoDB에서는 방지됩니다.  
마지막으로, Serializable은 가장 높은 수준으로 모든 문제가 발생하지 않지만, 동시성은 매우 낮아 실무에서는 거의 사용하지 않습니다.  
정리하면, Dirty Read는 커밋되지 않은 데이터를 읽는 것, Non-Repeatable Read는 같은 행의 값이 달라지는 현상, Phantom Read는 범위 조회 결과가 달라지는 현상입니다.